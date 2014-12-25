<?php

use OnlyBits\LogicGates\OrGate;

use OnlyBits\Connectors\LogicWire;

class LogicGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider totalInputsProvider
     */
    public function testTotalInputsIsPositive($inputs)
    {
        $or = new OrGate($inputs);
        $total_inputs = $or->getTotalInputs();

        $this->assertEquals(($total_inputs > 0), true, "The logic gate doesn't have a positive number of inputs!");
    }

    /**
     * @dataProvider totalInputsProvider
     */
    public function testInputListSameSizeTotalInputs($inputs)
    {
        $or = new OrGate($inputs);
        $total_inputs = $or->getTotalInputs();
        $all_inputs = $or->getAllInputs();

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
            [5],
            [6],
            [7],
            [8],
            [9],
            [10]
        ];
    }

    /**
     * @dataProvider logicGateFourInputProvider
     */
    public function testLogicGateGetInput($chosen_input, $inputs)
    {
        $or = new OrGate(4);
        $or->in(["1"=>$inputs[0], "2"=>$inputs[1], "3"=>$inputs[2], "4"=>$inputs[3]]);

        $input = $or->getInput($chosen_input);

        $this->assertEquals($input, $inputs[$chosen_input-1], "The logic gate is not returning the proper input value!");
    }

    public function logicGateFourInputProvider()
    {
        return [
            [1, [true, false, false, true]],
            [3, [true, false, false, false]],
            [2, [false, false, false, true]],
            [1, [true, true, true, true]],
            [4, [false, false, true, true]],
            [3, [true, true, false, true]],
        ];
    }

    /**
     * @dataProvider logicWireValueProvider
     */
    public function testConnectionBetweenWireAndLogicGateInput($wire_value)
    {
        $wire = new LogicWire;
        $wire->setValue($wire_value);

        $or = new OrGate(2);
        $or->connect($wire, 1);
        $input1 = $or->getInput(1);

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

        $or = new OrGate(2);
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
