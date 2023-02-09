<template>
  <v-app id="navigation">
    <NavBar />
    <Cart />
    <v-main>
      <v-container class="mt-12">
        <v-row>
          <v-col>
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
