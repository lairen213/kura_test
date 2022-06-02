import "popper.js";
import $ from "jquery";
import "bootstrap";
import Tagify from "@yaireo/tagify";
import "./calendar";

$(document).ready(function () {
  const inputTags = document.querySelector("#form-input-tags");
  var tagify = new Tagify(inputTags, {
    originalInputValueFormat: (valuesArr) =>
      valuesArr.map((item) => item.value).join(","),
  });
});
