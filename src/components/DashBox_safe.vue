<template>
  <div>
    <div id="box-cont-1">
      <div class="box_safe_img">
        <img src="../assets/escudo.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBox_safe",
  props: {
    msg: String
  }
};
</script>

<style>

#box-cont-1 {
  height: 100px;
  width: 300px;
  background: rgb(255, 255, 255);
  margin: 5px;
  border-radius: 15px;
  box-shadow: 0 8px 6px -6px rgb(161, 161, 161);
}

.box_safe_img {
  min-width: 5rem;
  max-width: 5rem;
  height: 5rem;
  transform: translate(30px, -30px);
  /* transform: translateX(1rem); */
  position: relative;
  box-shadow: 0 8px 6px -6px rgb(161, 161, 161);
}

.box_safe_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0.8rem;
}

.box_safe_img::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    rgba(79, 254, 131, 0.8),
    rgba(108, 206, 149, 0.8)
  );
  box-shadow: 0.5rem 0.5rem 3rem 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.8rem;
}
</style>