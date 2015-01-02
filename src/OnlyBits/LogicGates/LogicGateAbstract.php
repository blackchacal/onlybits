<?php

namespace OnlyBits\LogicGates;

use OnlyBits\Connectors\ConnectInterface;
use OnlyBits\Connectors\WireAbstract;

abstract class LogicGateAbstract implements ConnectInterface, LogicGateInterface
{
    /**
     * Total number of inputs for the gate.
     *
     * @var int
     */
    protected $total_inputs;

    /**
     * The list of binary inputs to the gate. The format should be:
     * [
     *     "input_number" => input_value (bool),
     *     "1" => false,
     *     "2" => true,
     *     ...
     * ]
     *
     * @var array
     */
    protected $inputs = [];

    /**
     * The value outputed by the gate.
     *
     * @var bool
     */
    protected $output;

    /**
     * Instance of components connected to it. In general it should be wires.
     *
     * @var array
     */
    protected $connected_to = [];

    /**
     * Constructor.
     *
     * @param int $number_inputs Gate total number of inputs.
     */
    public function __construct($number_inputs)
    {
        $total = intval($number_inputs);

        // Check for correct input number
        if (!is_numeric($total) || $total <= 0) {
            $total = 2;
        }

        // Initialize all the inputs to false.
        for ($i = 0; $i < $total; $i++) {
            $this->inputs[strval($i+1)] = false;
        }

        $this->total_inputs = $total;
    }

    /**
     * Retrieves the total number of inputs of the gate.
     *
     * @return int Gate total input number.
     */
    public function getTotalInputs()
    {
        return $this->total_inputs;
    }

    /**
     * {@inheritdoc}
     */
    public function in(array $inputs = [])
    {
        foreach ($inputs as $key => $value) {
            if (array_key_exists($key, $this->inputs) && is_bool($value)) {
                $this->inputs[$key] = $value;
            }
        }

        return $this->inputs;
    }

    /**
     * {@inheritdoc}
     */
    abstract public function out();

    /**
     * Updates the value of the wire connected to ouput if there's one.
     *
     * @return void
     */
    protected function updateOutputConnection()
    {
        if (count($this->connected_to) > 0) {
            foreach ($this->connected_to as $connected) {
                if ($connected['pin'] == 'out' && $connected['entity'] instanceof WireAbstract) {
                    $connected['entity']->setValue($this->output);
                }
            }
        }
    }

    /**
     * Connect wires with logic gates.
     *
     * {@inheritdoc}
     */
    public function connect(WireAbstract $wire, $pin = null)
    {
        if (is_null($pin)) {
            // Connect output to wire
            $wire->setValue($this->output);
            $this->connected_to[] = ['entity' => $wire, 'pin' => 'out'];
        } else {
            // Connect input to wire
            $this->inputs[strval($pin)] = $wire->getValue();
            $this->connected_to[] = ['entity' => $wire, 'pin' => $pin];
        }
    }
}
