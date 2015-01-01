<?php

namespace OnlyBits\Outputs;

use OnlyBits\Connectors\WireAbstract;

class BinaryLight extends OutputAbstract
{
    /**
     * Constructor.
     */
    public function __construct()
    {
        parent::__construct(1, false);

        $this->state = false;
    }

    /**
     * {@inheritdoc}
     */
    public function connect(WireAbstract $wire, $pin = null)
    {
        $this->inputs["1"] = $wire->getValue();

        $this->connected_to[] = $wire;
    }

    /**
     * {@inheritdoc}
     */
    public function show()
    {
        if (count($this->connected_to) > 0 && $this->connected_to[0] instanceof WireAbstract) {
            $this->inputs["1"] = $this->connected_to[0]->getValue();
        }

        $this->state = $this->inputs["1"];

        return $this->state;
    }
}
