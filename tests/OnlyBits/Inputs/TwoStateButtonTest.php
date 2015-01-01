<?php

use OnlyBits\Connectors\LogicWire;
use OnlyBits\Inputs\TwoStateButton;

class TwoStateButtonTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicTwoStateValueProvider
     */
    public function testDefaultStateIsDefinedOnConstructor($state1, $state2)
    {
        $button = new TwoStateButton($state1, $state2);
        $wire = new LogicWire;

        // Connect to wire. The wire gets the button output and allows to check
        // its value
        $button->connect($wire);
        $default_state = $wire->getValue();

        $this->assertEquals($state1, $default_state, "The button default state isn't set correctly");
    }

    /**
     * @dataProvider logicTwoStateValueProvider
     */
    public function testTriggerChangesButtonState($state1, $state2)
    {
        $button = new TwoStateButton($state1, $state2);
        $wire = new LogicWire;

        // Change button state
        $button->trigger();

        // Connect to wire. The wire gets the button output and allows to check
        // its value
        $button->connect($wire);
        $state = $wire->getValue();

        $this->assertEquals($state2, $state, "The button default state isn't set correctly");
    }

    public function logicTwoStateValueProvider()
    {
        return [
            [false, true],
            [true, false]
        ];
    }
}
