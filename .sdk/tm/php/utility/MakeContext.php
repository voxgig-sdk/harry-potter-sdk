<?php
declare(strict_types=1);

// HarryPotter SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HarryPotterMakeContext
{
    public static function call(array $ctxmap, ?HarryPotterContext $basectx): HarryPotterContext
    {
        return new HarryPotterContext($ctxmap, $basectx);
    }
}
