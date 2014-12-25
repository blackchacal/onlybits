<?php

use OnlyBits\LogicGates\NotGate;

class NotGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateOneInputProvider
     */
    public function testOutputRespectsNotGateTruthTable($inputs, $out)
    {
        $not = new NotGate;
        $not->in($inputs);
        $output = $not->out();

        $this->assertEquals($output, $out, "The NOT gate output doesn't respect the truth table!");
    }

    public function logicGateOneInputProvider()
    {
        return [
            [["1"=>false], true],
            [["1"=>true], false],
        ];
    }
}
