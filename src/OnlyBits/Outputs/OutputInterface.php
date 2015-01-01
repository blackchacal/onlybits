<?php

namespace OnlyBits\Outputs;

interface OutputInterface
{
    /**
     * Manifests the output signal according to the input values, and output
     * type.
     *
     * @return mixed
     */
    public function show();
}
