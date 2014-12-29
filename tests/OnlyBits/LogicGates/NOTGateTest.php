<?php

use OnlyBits\LogicGates\NOTGate;

class NOTGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateOneInputProvider
     */
    public function testOutputRespectsNOTGateTruthTable($inputs, $out)
    {
        $not = new NOTGate;
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
