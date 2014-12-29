<?php

use OnlyBits\LogicGates\ORGate;
use OnlyBits\Connectors\LogicWire;

class LogicGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider totalInputsProvider
     */
    public function testTotalInputsIsPositive($inputs)
    {
        $or = new ORGate($inputs);
        $total_inputs = $or->getTotalInputs();

        $this->assertEquals(($total_inputs > 0), true, "The logic gate doesn't have a positive number of inputs!");
    }

    /**
     * @dataProvider totalInputsProvider
     */
    public function testInputListSameSizeTotalInputs($inputs)
    {
        $or = new ORGate($inputs);
        $total_inputs = $or->getTotalInputs();
        $all_inputs = $or->in();

        $this->assertCount($total_inputs, $all_inputs, "The input list doesn't have the same size as total inputs!");
    }

    public function totalInputsProvider()
    {
        return [
            [-2],
            [-1],
            [0],
            [1],
            [2],
            [3],
            [4],
            [5]
        ];
    }

    /**
     * @dataProvider logicWireValueProvider
     */
    public function testConnectionBetweenWireAndLogicGateInput($wire_value)
    {
        $wire = new LogicWire;
        $wire->setValue($wire_value);

        $or = new ORGate;
        $or->connect($wire, 1);
        $inputs = $or->in();
        $input1 = $inputs["1"];

        $this->assertEquals($input1, $wire_value, "The connection between wire and logic gate input is corrupted!");
    }

    public function logicWireValueProvider()
    {
        return [
            [true],
            [false]
        ];
    }

    /**
     * @dataProvider logicGateDoubleInputProvider
     */
    public function testConnectionBetweenWireAndLogicGateOutput($input1, $input2)
    {
        $wire = new LogicWire;

        $or = new ORGate;
        $or->in(["1"=>$input1, "2"=>$input2]);
        $output = $or->out();
        $or->connect($wire);
        $wire_value = $wire->getValue();

        $this->assertEquals($output, $wire_value, "The connection between wire and logic gate output is corrupted!");
    }

    public function logicGateDoubleInputProvider()
    {
        return [
            [false, false],
            [false, true],
            [true, false],
            [true, true],
        ];
    }
}
