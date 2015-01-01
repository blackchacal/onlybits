<?php

namespace OnlyBits\Inputs;

use OnlyBits\Inputs\IInput;
use OnlyBits\Connectors\IConnect;
use OnlyBits\Connectors\Wire;

class TwoStateButton implements IInput, IConnect
{
    /**
     * Button state 1.
     * @var mixed
     */
    private $state1;

    /**
     * Button state 2.
     * @var mixed
     */
    private $state2;

    /**
     * Button's current state.
     * @var mixed
     */
    private $current_state;

    /**
     * The value outputted by the button.
     * @var mixed
     */
    private $output;

    /**
     * Constructor. The state 1 should be default state.
     *
     * @param mixed $state1 Button state 1
     * @param mixed $state2 Button state 2
     */
    public function __construct($state1, $state2)
    {
        $this->state1 = $state1;
        $this->state2 = $state2;

        $this->current_state = $state1;
        $this->output = $state1;
    }

    /**
     * {@inheritdoc}
     */
    public function trigger()
    {
        $this->current_state = ($this->current_state == $state1) ? $state2 : $state1;

        $this->output = $this->current_state;
    }

    /**
     * {@inheritdoc}
     */
    public function connect(Wire $wire, $pin = null)
    {
        $wire->setValue($this->output);

        return $wire;
    }
}
