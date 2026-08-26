<?php
declare(strict_types=1);

// HarryPotter SDK configuration

class HarryPotterConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HarryPotter",
                "slug" => "harry-potter",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://hp-api.onrender.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "character" => [],
                    "spell" => [],
                ],
            ],
            "entity" => [
        'character' => [
          'fields' => [
            [
              'name' => 'actor',
              'short' => 'Name of the actor who portrayed the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'alive',
              'short' => 'Whether the character is alive',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ancestry',
              'short' => 'Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'core',
              'short' => 'Core material of the wand',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dateOfBirth',
              'short' => 'Date of birth of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'eyeColour',
              'short' => 'Eye color of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hairColour',
              'short' => 'Hair color of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hogwartsStaff',
              'short' => 'Whether the character is a Hogwarts staff member',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'hogwartsStudent',
              'short' => 'Whether the character is a Hogwarts student',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'house',
              'short' => 'Hogwarts house the character belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image',
              'short' => 'URL to an image of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'length',
              'short' => 'Length of the wand in inches',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'patronus',
              'short' => 'The character\'s Patronus form',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wand',
              'short' => 'Information about the character\'s wand',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wizard',
              'short' => 'Whether the character is a wizard or witch',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'wood',
              'short' => 'Type of wood the wand is made from',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/characters',
                  'parts' => [
                    'api',
                    'characters',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/characters/staff',
                  'parts' => [
                    'api',
                    'characters',
                    'staff',
                  ],
                  'select' => [
                    '$action' => 'staff',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/characters/students',
                  'parts' => [
                    'api',
                    'characters',
                    'students',
                  ],
                  'select' => [
                    '$action' => 'student',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'gryffindor',
                        'kind' => 'param',
                        'name' => 'house',
                        'orig' => 'house',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/characters/house/{house}',
                  'parts' => [
                    'api',
                    'characters',
                    'house',
                    '{house}',
                  ],
                  'select' => [
                    'exist' => [
                      'house',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/character/{id}',
                  'parts' => [
                    'api',
                    'character',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.wand`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'house',
              ],
            ],
          ],
        ],
        'spell' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Description of what the spell does',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the spell',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the spell',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'spell',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/spells',
                  'parts' => [
                    'api',
                    'spells',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HarryPotterFeatures::make_feature($name);
    }
}
