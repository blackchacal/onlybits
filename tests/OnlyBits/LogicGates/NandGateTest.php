<?php

use OnlyBits\LogicGates\NandGate;

class NandGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTwoInputProvider
     */
    public function testOutputRespectsNandGateTruthTable($inputs, $out)
    {
        $nand = new NandGate;
        $nand->in($inputs);
        $output = $nand->out();

        $this->assertEquals($output, $out, "The nor gate output doesn't respect the truth table!");
    }

    public function logicGateTwoInputProvider()
    {
        return [
            [["1"=>false, "2"=>false], true],
            [["1"=>false, "2"=>true], true],
            [["1"=>true, "2"=>false], true],
            [["1"=>true, "2"=>true], false],
        ];
    }
}
