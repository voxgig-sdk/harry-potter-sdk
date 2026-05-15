<?php
declare(strict_types=1);

// HarryPotter SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class HarryPotterFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new HarryPotterBaseFeature();
            case "test":
                return new HarryPotterTestFeature();
            default:
                return new HarryPotterBaseFeature();
        }
    }
}
