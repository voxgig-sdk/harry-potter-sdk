<?php
declare(strict_types=1);

// HarryPotter SDK utility: feature_add

class HarryPotterFeatureAdd
{
    public static function call(HarryPotterContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
