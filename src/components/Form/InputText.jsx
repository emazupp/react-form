export default function InputText({ text }) {
  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        {text}
      </span>
      <input type="text" class="form-control" placeholder="..." />
    </div>
  );
}
