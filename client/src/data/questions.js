const questions = [
	{
		id: 1,
		question: "What is your Hair type?",
		options: [
			{ id: '1', text: "Unruly, unique", image: "/assets/YesalwaLogo.png", type: "Asymmetrie" },
			{ id: '2', text: "Fine", image: "/assets/YesalwaLogo.png", type: "Stirn" },
			{ id: '3', text: "Curly", image: "/assets/YesalwaLogo.png", type: "Wange" },
			{ id: '4', text: "Straight", image: "/assets/YesalwaLogo.png", type: "Stirn" },
			{ id: '5', text: "Thick / Slightly wavy", image: "/assets/YesalwaLogo.png", type: "Kiefer" },
			{ id: '6', text: "Very shiny", image: "/assets/YesalwaLogo.png", type: "Asymmetrie" }
		],
	},
	{
		id: 2,
		question: "Pick your Hairline?",
		options: [
			{ id: '7', text: "Straight, wide Hairline", image: "/assets/YesalwaLogo.png", type: "Stirn" },
			{ id: '8', text: "Heart-shaped hairline and face, wide cheeks", image: "/assets/YesalwaLogo.png", type: "Wange" },
			{ id: '9', text: "Low hairline, no specific shape", image: "/assets/YesalwaLogo.png", type: "Kiefer" },
			{ id: '10', text: "Hair spike like Mephisto's or diamond-shaped face form", image: "/assets/YesalwaLogo.png", type: "Asymmetrie" },
		],
	},
	{
		id: 3,
		question: "What does your Forehead look like?",
		options: [
			{ id: '11', text: "Large Forehead", image: "/assets/YesalwaLogo.png", type: "Stirn" },
			{ id: '12', text: "Average Forehead width", image: "/assets/YesalwaLogo.png", type: "None" },
			{ id: '13', text: "Short Forehead", image: "/assets/YesalwaLogo.png", type: "Kiefer" },
		],
	},
	{
		id: 4,
		question: "Pick the best match for your eyebrows?",
		options: [
			{ id: '14', text: "Fine, straight, horizontal eyebrows", image: "/assets/YesalwaLogo.png", type: "missing" },
			{ id: '15', text: "Arched eyebrows", image: "/assets/YesalwaLogo.png", type: "missing" },
			{ id: '16', text: "bushy eyebrows", image: "/assets/YesalwaLogo.png", type: "missing" },
			{ id: '17', text: "Pointed often different eyebrows", image: "/assets/YesalwaLogo.png", type: "missing" },
		],
	},
	{
		id: 5,
		question: "How does your Eye look like?",
		options: [
			{ id: '18', text: "Spring", image: "/assets/YesalwaLogo.png" },
			{ id: '19', text: "Summer", image: "/assets/YesalwaLogo.png" },
			{ id: '20', text: "Fall", image: "/assets/YesalwaLogo.png" },
			{ id: '21', text: "Winter", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 6,
		question: "What is your favorite food?",
		options: [
			{ id: '22', text: "Pizza", image: "/assets/YesalwaLogo.png" },
			{ id: '23', text: "Burger", image: "/assets/YesalwaLogo.png" },
			{ id: '24', text: "Pasta", image: "/assets/YesalwaLogo.png" },
			{ id: '25', text: "Sushi", image: "/assets/YesalwaLogo.png" },
			{ id: '26', text: "Dal", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 7,
		question: "What is your favorite drink?",
		options: [
			{ id: '27', text: "Water", image: "/assets/YesalwaLogo.png" },
			{ id: '28', text: "Soda", image: "/assets/YesalwaLogo.png" },
			{ id: '29', text: "Coffee", image: "/assets/YesalwaLogo.png" },
			{ id: '30', text: "Tea", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 8,
		question: "Lip / Mouth shape?",
		options: [
			{ id: '31', text: "Thin straight mouth", image: "/assets/YesalwaLogo.png" },
			{ id: '32', text: "Curved or child-looking lips", image: "/assets/YesalwaLogo.png" },
			{ id: '33', text: "Beautifully curved mouth", image: "/assets/YesalwaLogo.png" },
			{ id: '34', text: "Crooked Mouth", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 9,
		question: "What's your teeth placement?",
		options: [
			{ id: '35', text: "Straight teeth", image: "/assets/YesalwaLogo.png" },
			{ id: '36', text: "Crooked teeth", image: "/assets/YesalwaLogo.png" },
			{ id: '37', text: "Normal teeth", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 10,
		question: "What is your Jaw line?",
		options: [
			{ id: '38', text: "Heart shaped face and pointy jaw", image: "/assets/YesalwaLogo.png" },
			{ id: '39', text: "Strong Jaw", image: "/assets/YesalwaLogo.png" },
			{ id: '40', text: "not clearly defined Jaw", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 11,
		question: "Neck type?",
		options: [
			{ id: '41', text: "Long swan Neck", image: "/assets/YesalwaLogo.png" },
			{ id: '42', text: "Short wider Neck", image: "/assets/YesalwaLogo.png" },
			{ id: '43', text: "Normal or Neutral Neck", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 12,
		question: "What is your Shoulder type?",
		options: [
			{ id: '44', text: "Straight Shoulders", image: "/assets/YesalwaLogo.png" },
			{ id: '45', text: "Strong Shoulders", image: "/assets/YesalwaLogo.png" },
			{ id: '46', text: "Dropping Shoulders", image: "/assets/YesalwaLogo.png" },
			{ id: '47', text: "Normal Shoulders", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 13,
		question: "What is your Body type?",
		options: [
			{ id: '48', text: "Trapeyoidal body, thinner fine limbs", image: "/assets/YesalwaLogo.png" },
			{ id: '49', text: "Heart shaped upper body, narrow wasp waist, wide hips", image: "/assets/YesalwaLogo.png" },
			{ id: '50', text: "Stout, robust body, X shaped joints, hips & shoulders", image: "/assets/YesalwaLogo.png" },
			{ id: '51', text: "cigarette-shaped body", image: "/assets/YesalwaLogo.png" },
		],
	},
	{
		id: 14,
		question: "What is your Asymmetry type?",
		options: [
			{ id: '52', text: "Scarred body", image: "/assets/YesalwaLogo.png" },
			{ id: '53', text: "Asymmetrical body", image: "/assets/YesalwaLogo.png" },
		]
	}
];

export default questions;