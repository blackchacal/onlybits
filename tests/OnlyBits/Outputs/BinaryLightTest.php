<?php

use OnlyBits\Connectors\LogicWire;
use OnlyBits\Outputs\BinaryLight;

class BinaryLightTest extends PHPUnit_Framework_TestCase
{
    public function testShowValueIsFalseByDefault()
    {
        $light = new BinaryLight;

        // Check default state
        $state = $light->show();

        $this->assertEquals(false, $state, "The default state isn't false!");
    }

    /**
     * @dataProvider logicInputProvider
     */
    public function testConnectingToWirePassesWireStateToLight($value)
    {
        $light = new BinaryLight;
        $wire = new LogicWire;

        // Change wire value
        $wire->setValue($value);

        // Connect wire to light and check state
        $light->connect($wire);
        $state = $light->show();

        $this->assertEquals($value, $state, "The light doesn't get wire value!");
    }

    public function logicInputProvider()
    {
        return [
            [false],
            [true],
        ];
    }
}
