<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserResource extends Resource
{
  protected static ?string $model = User::class;

  protected static ?string $navigationIcon = 'heroicon-o-user-circle';
  protected static ?string $navigationGroup = 'User Management';
  public static function form(Form $form): Form
  {
    return $form
      ->schema([
        Forms\Components\TextInput::make('name')
          ->required()
          ->maxLength(255),
        Forms\Components\TextInput::make('email')
          ->email()
          ->required()
          ->maxLength(255),
        Forms\Components\DateTimePicker::make('email_verified_at')
          ->closeOnDateSelection()
          ->visible(function () {
            $authUser = Auth::user();
            if (!$authUser) {
              return false;
            }
            $user = User::find($authUser->id);
            return $user->hasRole('super_admin');
          })
          ->maxDate(now()),
        Forms\Components\TextInput::make('password')
          ->password()
          ->dehydrateStateUsing(fn($state) => Hash::make($state))
          ->dehydrated(fn($state) => filled($state))
          ->maxLength(255),
        Forms\Components\Select::make('roles')
          ->relationship('roles', 'name')
          ->columnSpanFull()
          ->visible(function () {
            $authUser = Auth::user();
            if (!$authUser) {
              return false;
            }
            $user = User::find($authUser->id);
            return $user->hasRole('super_admin');
          })
          ->native(true)
          ->preload(),
      ]);
  }

  public static function table(Table $table): Table
  {
    return $table
      ->columns([
        Tables\Columns\TextColumn::make('name')
          ->searchable(),
        Tables\Columns\TextColumn::make('email')
          ->searchable(),
        Tables\Columns\TextColumn::make('email_verified_at')
          ->dateTime()
          ->sortable(),
        Tables\Columns\TextColumn::make('roles')
          ->label('Role')
          // ->sortable()
          ->getStateUsing(fn($record) => collect($record->roles)
            ->pluck('name')
            ->map(fn($name) => Str::headline(str_replace('_', ' ', $name))))
          ->colors([
            'danger',
          ])
          ->badge(),
        Tables\Columns\TextColumn::make('created_at')
          ->dateTime()
          ->sortable()
          ->toggleable(isToggledHiddenByDefault: true),
        Tables\Columns\TextColumn::make('updated_at')
          ->dateTime()
          ->sortable()
          ->toggleable(isToggledHiddenByDefault: true),
      ])
      ->filters([
        //
      ])
      ->actions([
        Tables\Actions\EditAction::make(),
      ])
      ->bulkActions([
        Tables\Actions\BulkActionGroup::make([
          Tables\Actions\DeleteBulkAction::make(),
        ]),
      ]);
  }

  public static function getRelations(): array
  {
    return [
      //
    ];
  }

  // Count User
  public static function getNavigationBadge(): ?string
  {
    return static::getModel()::count();
  }

  public static function getPages(): array
  {
    return [
      'index' => Pages\ListUsers::route('/'),
      'create' => Pages\CreateUser::route('/create'),
      'edit' => Pages\EditUser::route('/{record}/edit'),
    ];
  }
}
