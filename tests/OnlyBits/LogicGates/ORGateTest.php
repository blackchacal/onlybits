<?php

use OnlyBits\LogicGates\ORGate;

class ORGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTwoInputProvider
     */
    public function testOutputRespectsORGateTruthTable($inputs, $out)
    {
        $or = new ORGate;
        $or->in($inputs);
        $output = $or->out();

        $this->assertEquals($output, $out, "The OR gate output doesn't respect the truth table!");
    }

    public function logicGateTwoInputProvider()
    {
        return [
            [["1"=>false, "2"=>false], false],
            [["1"=>false, "2"=>true], true],
            [["1"=>true, "2"=>false], true],
            [["1"=>true, "2"=>true], true],
        ];
    }
}
