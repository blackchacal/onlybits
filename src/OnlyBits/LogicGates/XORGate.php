<?php

namespace OnlyBits\LogicGates;

use OnlyBits\Connectors\WireAbstract;

class XORGate extends LogicGateAbstract
{
    public function __construct()
    {
        parent::__construct(2);
    }

    /**
     * {@inheritdoc}
     */
    public function out()
    {
        $input1 = $this->inputs["1"];
        $input2 = $this->inputs["2"];

        $this->output = ($input1 xor $input2);

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
