<?php

namespace OnlyBits\Inputs;

use OnlyBits\Connectors\ConnectInterface;
use OnlyBits\Connectors\WireAbstract;

abstract class InputAbstract implements InputInterface, ConnectInterface
{
    /**
     * Input component available states.
     *
     * @var array
     */
    protected $available_states = [];

    /**
     * The values outputted by the input component.
     *
     * @var array
     */
    protected $outputs = [];

    /**
     * Instance of components connected to it. In general it should be wires.
     *
     * @var array
     */
    protected $connected_to = [];

    /**
     * Constructor.
     *
     * @param int   $number_outputs Component number of outputs.
     * @param mixed $default_value  Outputs default value.
     */
    public function __construct($number_outputs, $default_value)
    {
        $total = intval($number_outputs);

        // Check for correct output number
        if (!is_numeric($total) || $total <= 0) {
            $total = 1;
        }

        // Initialize all the outputs to default value.
        for ($i = 0; $i < $total; $i++) {
            $this->outputs[strval($i+1)] = $default_value;
        }
    }

    /**
     * {@inheritdoc}
     */
    abstract public function trigger();

    /**
     * {@inheritdoc}
     */
    abstract public function connect(WireAbstract $wire, $pin = null);
}
