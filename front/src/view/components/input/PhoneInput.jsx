function PhoneInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='phone'
			className='form-input'
		>
			{labelText}:
			<input
				name='phone'
				type='tel'
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default PhoneInput;
