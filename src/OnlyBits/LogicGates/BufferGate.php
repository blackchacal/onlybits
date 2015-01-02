<?php

namespace OnlyBits\LogicGates;

use OnlyBits\Connectors\WireAbstract;

class BufferGate extends LogicGateAbstract
{
    public function __construct()
    {
        parent::__construct(1);
    }

    /**
     * {@inheritdoc}
     */
    public function out()
    {
        $this->output = $this->inputs["1"];

        if (count($this->connected_to) > 0) {
            foreach ($this->connected_to as $connected) {
                if ($connected['pin'] == 'out' && $connected['entity'] instanceof WireAbstract) {
                    $connected['entity']->setValue($this->output);
                }
            }
        }

        return $this->output;
    }
}
