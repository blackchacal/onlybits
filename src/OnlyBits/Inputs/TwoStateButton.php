<?php

namespace OnlyBits\Inputs;

use OnlyBits\Connectors\ConnectInterface;
use OnlyBits\Connectors\WireAbstract;

class TwoStateButton implements InputInterface, ConnectInterface
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
     * Instance of entity connected to it. In this case it should be a wire.
     *
     * @var OnlyBits\Connectors\Wire
     */
    private $connected_to;

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
        $this->current_state = ($this->current_state == $this->state1) ? $this->state2 : $this->state1;
        $this->output = $this->current_state;

        if ($this->connected_to instanceof WireAbstract) {
            $this->connected_to->setValue($this->output);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function connect(WireAbstract $wire, $pin = null)
    {
        $wire->setValue($this->output);

        $this->connected_to = $wire;
    }
}
