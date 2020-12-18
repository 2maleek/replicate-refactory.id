<template>
  <div>
    <b-navbar toggleable="lg" >
      <b-navbar-brand href="#"><img src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/refactory-hd.png?resize=125%2C52&ssl=1" alt="Refactory.id" width="125px" height="52px"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link class="nav-link" to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/courses">Courses</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/custom-trainings">Custom Trainings</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/case-studies">Case Studies</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
