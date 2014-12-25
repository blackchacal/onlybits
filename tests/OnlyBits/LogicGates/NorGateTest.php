<?php

use OnlyBits\LogicGates\NorGate;

class NorGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTwoInputProvider
     */
    public function testOutputRespectsNorGateTruthTable($inputs, $out)
    {
        $nor = new NorGate;
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
