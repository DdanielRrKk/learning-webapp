function TextInput({labelText, value, changeHandler}) {
	return (
		<label>
			{labelText}:
			<input
				type='text'
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default TextInput;
