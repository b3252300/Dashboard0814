<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 2rem;
  height: 2rem;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 1.56rem);
    left: -1.62rem;
    position: absolute;
    border: 0.06rem solid var(--color-border);
    background: var(--color-background);
    border-radius: 0.5rem;
    width: 3.12rem;
    height:3.12rem;
  }

  .item:before {
    content: ' ';
    border-left: 0.06rem solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 1.56rem);
    height: calc(50% - 1.56rem);
  }

  .item:after {
    content: ' ';
    border-left: 0.06rem solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 1.56rem);
    height: calc(50% - 1.56rem);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
