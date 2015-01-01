<?php

namespace OnlyBits\Inputs;

use OnlyBits\Connectors\WireAbstract;

class TwoStateButton extends InputAbstract
{
    /**
     * Constructor. The state 1 should be default state.
     *
     * @param mixed $state1 Button state 1
     * @param mixed $state2 Button state 2
     */
    public function __construct($state1, $state2)
    {
        parent::__construct(1, $state1);

        $this->available_states[] = $state1;
        $this->available_states[] = $state2;
    }

    /**
     * {@inheritdoc}
     */
    public function trigger()
    {
        $state1 = $this->available_states[0];
        $state2 = $this->available_states[1];

        $this->outputs["1"] = ($this->outputs["1"] == $state1) ? $state2 : $state1;

        if (count($this->connected_to) > 0 && $this->connected_to["1"] instanceof WireAbstract) {
            $this->connected_to["1"]->setValue($this->outputs["1"]);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function connect(WireAbstract $wire, $pin = null)
    {
        $wire->setValue($this->outputs["1"]);

        $this->connected_to["1"] = $wire;
    }
}
