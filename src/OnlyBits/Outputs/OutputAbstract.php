<?php

namespace OnlyBits\Outputs;

use OnlyBits\Connectors\ConnectInterface;
use OnlyBits\Connectors\WireAbstract;

abstract class OutputAbstract implements OutputInterface, ConnectInterface
{
    /**
     * The state of the output.
     *
     * @var mixed
     */
    protected $state;

    /**
     * Component inputs. Receive their value from other components through wire
     * connection.
     *
     * @var array
     */
    protected $inputs = [];

    /**
     * Instance of components connected to it. In general it should be wires.
     *
     * @var array
     */
    protected $connected_to = [];

    /**
     * Constructor.
     *
     * @param int   $number_inputs Component number of inputs.
     * @param mixed $default_value Inputs default value.
     */
    public function __construct($number_inputs, $default_value)
    {
        $total = intval($number_inputs);

        // Check for correct input number
        if (!is_numeric($total) || $total <= 0) {
            $total = 1;
        }

        // Initialize all the inputs to default value.
        for ($i = 0; $i < $total; $i++) {
            $this->inputs[strval($i+1)] = $default_value;
        }
    }

    /**
     * {@inheritdoc}
     */
    abstract public function connect(WireAbstract $wire, $pin = null);

    /**
     * {@inheritdoc}
     */
    abstract public function show();
}
