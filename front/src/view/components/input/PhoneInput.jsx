function PhoneInput({labelText, value, changeHandler}) {
	return (
		<label>
			{labelText}:
			<input
				type='tel'
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default PhoneInput;
