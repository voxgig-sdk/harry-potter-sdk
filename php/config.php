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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'alive',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ancestry',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'core',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dateOfBirth',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'eyeColour',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hairColour',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hogwartsStaff',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'hogwartsStudent',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'house',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'length',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'patronus',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wand',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wizard',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'wood',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
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
