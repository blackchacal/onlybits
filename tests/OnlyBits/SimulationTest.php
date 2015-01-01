<?php

use OnlyBits\LogicGates\ORGate;
use OnlyBits\LogicGates\NORGate;
use OnlyBits\LogicGates\NOTGate;
use OnlyBits\LogicGates\ANDGate;
use OnlyBits\LogicGates\NANDGate;
use OnlyBits\LogicGates\XORGate;
use OnlyBits\LogicGates\XNORGate;
use OnlyBits\LogicGates\BufferGate;
use OnlyBits\Connectors\LogicWire;
use OnlyBits\Inputs\TwoStateButton;
use OnlyBits\Outputs\BinaryLight;

class SimulationTest extends PHPUnit_Framework_TestCase
{
    public function testIfWireConnectionUpdatesValueOnInputStateChange()
    {
        $button = new TwoStateButton(false, true);
        $wire = new LogicWire;
        $light = new BinaryLight;

        // Connect button to light with wire
        $button->connect($wire);
        $light->connect($wire);

        // Check if light is false since default button state is false
        $this->assertFalse($light->show());

        // Change button state
        $button->trigger();

        // Check if light updated state
        $this->assertTrue($light->show());
    }
}
