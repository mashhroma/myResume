export const formatNumber = (phoneNumber: string) => {
	const numberArray = phoneNumber.split("");
	const cityCode = " (" + numberArray.slice(2, 5).join("") + ") ";
	const number =
		numberArray.slice(5, 8).join("") +
		"-" +
		numberArray.slice(8, 10).join("") +
		"-" +
		numberArray.slice(10, 12).join("");
	return "+7" + cityCode + number;
};
