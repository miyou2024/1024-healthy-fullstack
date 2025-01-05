<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@ittlr/common-ui';
import { LOGIN_PATH } from '@ittlr/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
