<template>
  <div class="wui-app">
    <header class="hero">
      <h1 class="title">w-ui</h1>
      <p class="subtitle">A lightweight & modern Vue 3 UI component library</p>
    </header>

    <section id="get-started" class="section">
      <h2>Installation</h2>
      <pre class="code-block">npm install w-ui</pre>

      <h3>Usage</h3>
      <pre class="code-block">
import { WButton } from "w-ui";

&lt;WButton color="primary"&gt;Click me&lt;/WButton&gt;
      </pre>
    </section>

    <section class="section playground">
      <div class="sidebar">
        <h3>Components</h3>
        <ul>
          <li
            @click="active = 'button'"
            :class="{ active: active === 'button' }"
          >
            Button
          </li>
          <li @click="active = 'input'" :class="{ active: active === 'input' }">
            Input
          </li>
          <li
            @click="active = 'select'"
            :class="{ active: active === 'select' }"
          >
            Select
          </li>
          <li @click="active = 'card'" :class="{ active: active === 'card' }">
            Card
          </li>
        </ul>
      </div>

      <div class="preview">
        <h3>Preview</h3>

        <div v-if="active === 'button'">
          <div
            style="display: flex; flex-wrap: wrap; gap: 16px; max-width: 400px"
          >
            <WButton color="primary">Primary</WButton>
            <WButton color="secondary">Secondary</WButton>
            <WButton color="success">Success</WButton>
            <WButton color="warning">Warning</WButton>
            <WButton color="error">Error</WButton>
            <WButton loading>Loading</WButton>
            <WButton disabled>Disabled</WButton>
          </div>
        </div>

        <div
          v-if="active === 'input'"
          style="
            display: flex;
            flex-direction: column;
            gap: 16px;
            max-width: 300px;
          "
        >
          <WInput label="Username" placeholder="Enter your username" />
          <WInput label="Search" placeholder="Search here...">
            <template #left>🔍</template>
          </WInput>
          <WInput
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <WInput
            label="Email"
            placeholder="example@mail.com"
            error="Invalid email format"
          />
          <WInput label="Disabled field" placeholder="Can't type" disabled />
        </div>

        <div
          v-if="active === 'select'"
          style="
            display: flex;
            flex-direction: column;
            gap: 16px;
            max-width: 300px;
          "
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
            label="Technologies"
            multiple
            v-model="techStack"
            :options="frameworkList"
          />
        </div>

        <div
          v-if="active === 'card'"
          class="card-grid"
          style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;
            max-width: 900px;
          "
        >
          <WCard>
            <h3>Simple card</h3>
            <p>This is a basic card.</p>
          </WCard>

          <WCard shadow>
            <h3>With shadow</h3>
            <p>Perfect to highlight content.</p>
          </WCard>

          <WCard bordered>
            <h3>With border</h3>
            <p>A clean, distinguished style.</p>
          </WCard>

          <WCard shadow imgUrl="https://picsum.photos/400/200">
            <h3>Card with image</h3>
            <p>Great for products or posts.</p>
          </WCard>
        </div>

        <h3 style="margin-top: 30px">Code</h3>

        <pre v-if="active === 'button'" class="code-block">
&lt;WButton color="primary"&gt;Primary&lt;/WButton&gt;
&lt;WButton color="secondary"&gt;Secondary&lt;/WButton&gt;
&lt;WButton color="success"&gt;Success&lt;/WButton&gt;
&lt;WButton color="warning"&gt;Warning&lt;/WButton&gt;
&lt;WButton color="error"&gt;Error&lt;/WButton&gt;
&lt;WButton loading&gt;Loading&lt;/WButton&gt;
&lt;WButton disabled&gt;Disabled&lt;/WButton&gt;
        </pre>

        <pre v-if="active === 'input'" class="code-block">
&lt;WInput label="Username" placeholder="Enter your username" /&gt;

&lt;WInput label="Search" placeholder="Search here..."&gt;
  &lt;template #left&gt;🔍&lt;/template&gt;
&lt;/WInput&gt;

&lt;WInput label="Password" type="password" placeholder="Enter password" /&gt;

&lt;WInput label="Email" placeholder="example@mail.com" error="Invalid email format" /&gt;

&lt;WInput label="Disabled field" placeholder="Can't type" disabled /&gt;
        </pre>

        <pre v-if="active === 'select'" class="code-block">
&lt;WSelect v-model="select1" label="Country" :options="countries" /&gt;

&lt;WSelect v-model="select2" label="With Icon" size="lg" :options="frameworks"&gt;
  &lt;template #left&gt;🌎&lt;/template&gt;
&lt;/WSelect&gt;

&lt;WSelect v-model="select3" label="Error Example" error="Please choose an option" :options="colors" /&gt;

&lt;WSelect label="Technologies" multiple v-model="techStack" :options="frameworkList" /&gt;
        </pre>

<pre v-if="active === 'card'" class="code-block">
&lt;WCard&gt;
  &lt;h3&gt;Simple card&lt;/h3&gt;
  &lt;p&gt;This is a basic card.&lt;/p&gt;
&lt;/WCard&gt;

&lt;WCard shadow&gt;
  &lt;h3&gt;With shadow&lt;/h3&gt;
  &lt;p&gt;Perfect to highlight content.&lt;/p&gt;
&lt;/WCard&gt;

&lt;WCard bordered&gt;
  &lt;h3&gt;With border&lt;/h3&gt;
  &lt;p&gt;A clean, distinguished style.&lt;/p&gt;
&lt;/WCard&gt;

&lt;WCard shadow imgUrl="https://picsum.photos/400/200"&gt;
  &lt;h3&gt;Card with image&lt;/h3&gt;
  &lt;p&gt;Great for products or posts.&lt;/p&gt;
&lt;/WCard&gt;
</pre>
      </div>
    </section>

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
const techStack = ref([]);

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

const frameworkList = [
  { label: "Vue.js", value: "vue" },
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
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
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.section {
  padding: 60px 20px;
  max-width: 1100px;
  margin: auto;
}

.code-block {
  background: #1e1e1e;
  color: white;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  white-space: pre-wrap;
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
