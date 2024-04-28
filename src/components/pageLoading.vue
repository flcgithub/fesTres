<template>
    <div class="page-loading">
        <f-spin size="large" stroke="#5384ff" />
    </div>
</template>
<script setup>
import { FSpin } from '@fesjs/fes-design';
</script>
<style>
.page-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
