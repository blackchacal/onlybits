<?php

use OnlyBits\LogicGates\NORGate;

class NORGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTwoInputProvider
     */
    public function testOutputRespectsNORGateTruthTable($inputs, $out)
    {
        $nor = new NORGate;
        $nor->in($inputs);
        $output = $nor->out();

        $this->assertEquals($output, $out, "The NOR gate output doesn't respect the truth table!");
    }

    public function logicGateTwoInputProvider()
    {
        return [
            [["1"=>false, "2"=>false], true],
            [["1"=>false, "2"=>true], false],
            [["1"=>true, "2"=>false], false],
            [["1"=>true, "2"=>true], false],
        ];
    }
}
