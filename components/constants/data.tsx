type TCardData = {
	name: ECARD_NAMES
	keyword: string[]
	image: string
}

export enum ECARD_NAMES {
	Fool = 'The Fool',
	Magician = 'The Magician',
	HighPriestess = 'High Priestess',
	Empress = 'The Empress',
	Emperor = 'The Emperor',
	Hierophant = 'The Hierophant',
	Lover = 'The Lovers',
	Chariot = 'The Chariot',
	Strength = 'Strength',
	Hermit = 'The Hermit',
	WheelFortune = 'Wheel of Fortune',
	Justice = 'Justice',
	HangedMan = 'The Hanged Man',
	Death = 'Death',
	Temperance = 'Temperance'
}

export const MAJORS = [
	{
		name: ECARD_NAMES.Fool,
		keywords: ['Khởi đầu', 'Tự do', 'Tinh khiết', 'Tính không', 'Vô thức'],
		image: '0 the-fool'
	},
	{
		name: ECARD_NAMES.Magician, keywords: ['Kiến tạo', 'Tác lực', 'Định hướng', 'Nguyên nhân', 'Ý thức'],
		image: '1 the-magician'
	},
	{
		name: ECARD_NAMES.HighPriestess, keywords: ['Quan sát', 'Chậm rãi', 'Yên tĩnh', 'Khoảng cách', 'Trực giác'],
		image: '2 the-high-priestess'
	},
	{
		name: ECARD_NAMES.Empress, keywords: ['Dưỡng sinh', 'Thai nghén', 'Làm giàu', 'Từ bi', 'Đất mẹ'],
		image: '3 the-empress'
	},
	{
		name: ECARD_NAMES.Emperor, keywords: ['Dục dưỡng', 'Cải tạo', 'Kỷ luật', 'Quyền lực', 'Công án'],
		image: '4 the-emperor'
	},
	{
		name: ECARD_NAMES.Hierophant, keywords: ['Niềm tin', 'Giáo dục', 'Truyền thống', 'Số đông', 'Đạo'],
		image: '5 the-heirophant'
	},
	{
		name: ECARD_NAMES.Lover, keywords: ['Đồng điệu', 'Rung động', 'Lựa chọn', 'Phước lành', ' Duyên'],
		image: '6 the-lovers'
	},
	{
		name: ECARD_NAMES.Chariot, keywords: ['Nổi bật', 'Rẽ ngang', 'Tách mình', 'Cuộc chiến', ' Biểu hiện'],
		image: '7 the-chariot'
	},
	{
		name: ECARD_NAMES.Strength, keywords: ['Nhẫn nại', 'Thấu hiểu', 'Chấp nhận', 'Bình thản', 'Tỉnh thức'],
		image: '8 strength'
	},
	{
		name: ECARD_NAMES.Hermit, keywords: ['Thu mình', 'Chiêm nghiệm', 'Nhận thức', 'Phòng thủ', 'Bám chấp'],
		image: '9 the-hermit'
	},
	{
		name: ECARD_NAMES.WheelFortune, keywords: ['Chu kỳ', 'Thiên mệnh', 'Ngẫu nhiên', 'Thả lỏng', 'Tận hưởng'],
		image: '10 whell-of-fortune'
	},
	{
		name: ECARD_NAMES.Justice, keywords: ['Pháp luật', 'Tuân thủ', 'Tuyên án', 'Phân minh', 'Nhân quả'],
		image: '11 justice'
	},
	{
		name: ECARD_NAMES.HangedMan, keywords: ['Tự soi', 'Vỡ lòng', 'Chứng thực', 'Buông xuôi', 'Tịnh tâm'],
		image: '12 the-hanged-man'
	},
	{
		name: ECARD_NAMES.Death, keywords: ['Thay đổi', 'Hạn mức', 'Tái sinh', 'Biến chuyển', 'Đương nhiên'],
		image: '13 death'
	},
	{
		name: ECARD_NAMES.Temperance, keywords: ['Trao đổi', 'Bí thuật', 'Giải pháp', 'Uyển chuyển', 'Từ Bi'],
		image: '14 temperance'
	},
]

export const ALL_CARDS = [...MAJORS]
