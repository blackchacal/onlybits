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

    public function testSimulationTimeDifferenceBetweenObjectsAndExpressions()
    {
        $start_time = microtime(true);

        $a = true;
        $b = true;
        $c = true;

        $and = new ANDGate;
        $or = new ORGate;
        $wire1 = new LogicWire;
        $wire2 = new LogicWire;
        $wire3 = new LogicWire;
        $wire4 = new LogicWire;
        $wire5 = new LogicWire;

        $wire1->setValue($a);
        $wire2->setValue($b);
        $wire3->setValue($c);

        $and->connect($wire1, 1);
        $and->connect($wire2, 2);
        $and->connect($wire4);
        $or->connect($wire3, 2);
        $or->connect($wire4, 1);
        $or->connect($wire5);

        $and->out();
        $or->out();

        $out = $wire5->getValue();

        $end_time = microtime(true);
        $bench_1 = $end_time - $start_time;

        $start_time = microtime(true);

        $a = true;
        $b = true;
        $c = true;

        $s = ($a and $b) or $c;

        $end_time = microtime(true);
        $bench_2 = $end_time - $start_time;

        $this->assertEquals($s, $out, "Values don't match!");

        $this->assertGreaterThan($bench_2, $bench_1, "Objects take less time than expression!");
    }
}
