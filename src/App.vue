<template>
  <div class="wui-app">
    <!-- HERO -->
    <header class="hero">
      <h1 class="title">w-ui</h1>
      <p class="subtitle">A lightweight & modern Vue 3 UI component library</p>

      <div class="hero-actions">
        <a href="#get-started" class="btn primary">Get Started</a>
        <a
          href="https://github.com/WillyPbatista/W-UI/"
          target="_blank"
          class="btn ghost"
        >
          GitHub
        </a>
      </div>
    </header>

    <!-- GET STARTED -->
    <section id="get-started" class="section">
      <h2>Installation</h2>
      <pre class="code-block">npm install w-ui</pre>

      <h3>Usage</h3>
      <pre class="code-block">
import { WButton } from "w-ui";

&lt;WButton color="primary"&gt;Click me&lt;/WButton&gt;
      </pre>
    </section>

    <!-- PLAYGROUND -->
    <section class="section playground">
      <div class="sidebar">
        <h3>Components</h3>
        <ul>
          <li @click="active = 'button'" :class="{ active: active === 'button' }">
            Button
          </li>

          <li @click="active = 'input'" :class="{ active: active === 'input' }">
            Input
          </li>

          <li @click="active = 'select'" :class="{ active: active === 'select' }">
            Select
          </li>
        </ul>
      </div>

      <div class="preview">
        <h3>Preview</h3>

        <!-- BUTTON PREVIEW -->
        <div v-if="active === 'button'">
          <WButton color="primary">Primary</WButton>
          <WButton color="success">Success</WButton>
          <WButton loading>Loading...</WButton>
        </div>

        <!-- INPUT PREVIEW -->
        <div
          v-if="active === 'input'"
          style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;"
        >
          <WInput label="Username" placeholder="Enter your username" />
          <WInput label="Search" placeholder="Search here...">
            <template #left>🔍</template>
          </WInput>
          <WInput label="Password" type="password" placeholder="Enter password" />
          <WInput
            label="Email"
            placeholder="example@mail.com"
            error="Invalid email format"
          />
          <WInput label="Disabled field" placeholder="Can't type" disabled />
          <WInput size="sm" label="Small" placeholder="Small input" />
          <WInput size="md" label="Medium" placeholder="Medium input" />
          <WInput size="lg" label="Large" placeholder="Large input" />
        </div>

        <!-- SELECT PREVIEW -->
        <div
          v-if="active === 'select'"
          style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;"
        >
          <WSelect v-model="select1" label="Country" :options="countries" />

          <WSelect
            v-model="select2"
            label="With Icon"
            size="lg"
            :options="frameworks"
          >
            <template #left>🌎</template>
          </WSelect>

          <WSelect
            v-model="select3"
            label="Error Example"
            error="Please choose an option"
            :options="colors"
          />

          <WSelect
            v-model="select4"
            label="Disabled"
            disabled
            :options="[{ label: 'Option A', value: 'a' }]"
          />

          <!-- 🔥 NEW: MULTIPLE SELECT -->
          <WSelect
            label="Technologies"
            multiple
            placeholder="Select technologies"
            v-model="techStack"
            :options="[
              { label: 'Vue.js', value: 'vue' },
              { label: 'React', value: 'react' },
              { label: 'Angular', value: 'angular' },
              { label: 'Svelte', value: 'svelte' }
            ]"
          />
        </div>

        <h3>Code</h3>

        <!-- BUTTON CODE -->
        <pre v-if="active === 'button'" class="code-block">
&lt;WButton color="primary"&gt;Primary&lt;/WButton&gt;
&lt;WButton color="success"&gt;Success&lt;/WButton&gt;
&lt;WButton loading&gt;Loading...&lt;/WButton&gt;
        </pre>

        <!-- INPUT CODE -->
        <pre v-if="active === 'input'" class="code-block">
&lt;WInput label="Your name" placeholder="Type here..." /&gt;

&lt;WInput label="With icon" placeholder="Search..."&gt;
  &lt;template #left&gt;🔍&lt;/template&gt;
&lt;/WInput&gt;

&lt;WInput
  label="Error example"
  placeholder="Invalid..."
  error="This field is required"
/&gt;
        </pre>

        <!-- SELECT CODE -->
        <pre v-if="active === 'select'" class="code-block">
&lt;WSelect
  v-model="value"
  label="Select option"
  :options="[
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 }
  ]"
/&gt;

&lt;!-- Multiple --&gt;
&lt;WSelect
  v-model="multi"
  multiple
  :options="[
    { label: 'Vue', value: 'vue' },
    { label: 'React', value: 'react' }
  ]"
/&gt;
        </pre>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>w-ui — {{ new Date().getFullYear() }} • MIT License</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
const active = ref("button");

// Select models
const select1 = ref(null);
const select2 = ref(null);
const select3 = ref(null);
const select4 = ref(null);

// Multiple select model
const techStack = ref([]);

// Options
const countries = [
  { label: "USA", value: "usa" },
  { label: "Cuba", value: "cuba" },
  { label: "Spain", value: "spain" },
];

const frameworks = [
  { label: "Vue.js", value: "vue" },
  { label: "React", value: "react" },
  { label: "Svelte", value: "svelte" },
];

const colors = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
];
</script>

<style scoped>
.wui-app {
  font-family: system-ui, sans-serif;
  color: #222;
  padding-bottom: 40px;
}

.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
}

.title {
  font-size: 3rem;
  margin: 0;
}

.subtitle {
  margin-top: 10px;
  font-size: 1.2rem;
}

.hero-actions {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}

.btn.primary {
  background: white;
  color: #4f46e5;
}

.btn.ghost {
  border: 2px solid white;
  color: white;
}

.section {
  padding: 60px 20px;
  max-width: 1100px;
  margin: auto;
}

.code-block {
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  white-space: pre-wrap;
  overflow-x: auto;
}

.playground {
  display: flex;
  gap: 30px;
}

.sidebar {
  width: 200px;
  border-right: 1px solid #ddd;
  padding: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
}

.sidebar li.active {
  background: #4f46e5;
  color: white;
  border-radius: 4px;
}

.preview {
  flex: 1;
}

.footer {
  text-align: center;
  padding: 30px;
  margin-top: 50px;
  color: #777;
}
</style>
