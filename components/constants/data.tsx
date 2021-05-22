type TCardData = {
	name: EMAJOR_CARD_NAMES
	keyword: string[]
	image: string
}

export enum EMAJOR_CARD_NAMES {
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
	Temperance = 'Temperance',
	Devil = 'The Devil',
	Tower = 'The Tower',
	Star = 'The Star',
	Moon = 'The Moon',
	Sun = 'The Sun',
	Judgement = 'Judgement',
	World = 'The World'
}

export const MAJORS = [
	{
		name: EMAJOR_CARD_NAMES.Fool,
		keywords: ['Khởi đầu', 'Tự do', 'Tinh khiết', 'Tính không', 'Vô thức'],
		image: '0 the-fool'
	},
	{
		name: EMAJOR_CARD_NAMES.Magician, keywords: ['Kiến tạo', 'Tác lực', 'Định hướng', 'Nguyên nhân', 'Ý thức'],
		image: '1 the-magician'
	},
	{
		name: EMAJOR_CARD_NAMES.HighPriestess, keywords: ['Quan sát', 'Chậm rãi', 'Yên tĩnh', 'Khoảng cách', 'Trực giác'],
		image: '2 the-high-priestess'
	},
	{
		name: EMAJOR_CARD_NAMES.Empress, keywords: ['Dưỡng sinh', 'Thai nghén', 'Làm giàu', 'Từ bi', 'Đất mẹ'],
		image: '3 the-empress'
	},
	{
		name: EMAJOR_CARD_NAMES.Emperor, keywords: ['Dục dưỡng', 'Cải tạo', 'Kỷ luật', 'Quyền lực', 'Công án'],
		image: '4 the-emperor'
	},
	{
		name: EMAJOR_CARD_NAMES.Hierophant, keywords: ['Niềm tin', 'Giáo dục', 'Truyền thống', 'Số đông', 'Đạo'],
		image: '5 the-heirophant'
	},
	{
		name: EMAJOR_CARD_NAMES.Lover, keywords: ['Đồng điệu', 'Rung động', 'Lựa chọn', 'Phước lành', ' Duyên'],
		image: '6 the-lovers'
	},
	{
		name: EMAJOR_CARD_NAMES.Chariot, keywords: ['Nổi bật', 'Rẽ ngang', 'Tách mình', 'Cuộc chiến', ' Biểu hiện'],
		image: '7 the-chariot'
	},
	{
		name: EMAJOR_CARD_NAMES.Strength, keywords: ['Nhẫn nại', 'Thấu hiểu', 'Chấp nhận', 'Bình thản', 'Tỉnh thức'],
		image: '8 strength'
	},
	{
		name: EMAJOR_CARD_NAMES.Hermit, keywords: ['Thu mình', 'Chiêm nghiệm', 'Nhận thức', 'Phòng thủ', 'Bám chấp'],
		image: '9 the-hermit'
	},
	{
		name: EMAJOR_CARD_NAMES.WheelFortune, keywords: ['Chu kỳ', 'Thiên mệnh', 'Ngẫu nhiên', 'Thả lỏng', 'Tận hưởng'],
		image: '10 wheel-of-fortune'
	},
	{
		name: EMAJOR_CARD_NAMES.Justice, keywords: ['Pháp luật', 'Tuân thủ', 'Tuyên án', 'Phân minh', 'Nhân quả'],
		image: '11 justice'
	},
	{
		name: EMAJOR_CARD_NAMES.HangedMan, keywords: ['Tự soi', 'Vỡ lòng', 'Chứng thực', 'Buông xuôi', 'Tịnh tâm'],
		image: '12 the-hanged-man'
	},
	{
		name: EMAJOR_CARD_NAMES.Death, keywords: ['Thay đổi', 'Hạn mức', 'Tái sinh', 'Biến chuyển', 'Đương nhiên'],
		image: '13 death'
	},
	{
		name: EMAJOR_CARD_NAMES.Temperance, keywords: ['Trao đổi', 'Bí thuật', 'Giải pháp', 'Uyển chuyển', 'Từ Bi'],
		image: '14 temperance'
	},
	{
		name: EMAJOR_CARD_NAMES.Devil,
		keywords: ['Trần trụi', 'Ràng buộc', 'Khao khát', 'Đổi chác', 'Nợ'],
		image: '15 the-devil'
	},
	{
		name: EMAJOR_CARD_NAMES.Tower,
		keywords: ['Đổ vỡ', 'Biến cố', 'Đảo chiều', 'Trả giá', 'Chấp niệm'],
		image: '16 the-tower'
	},
	{
		name: EMAJOR_CARD_NAMES.Star,
		keywords: ['Hi vọng', 'Phục hồi', 'Định vị', 'Âm thầm', 'Giải thoát'],
		image: '17 the-star'
	},
	{
		name: EMAJOR_CARD_NAMES.Moon,
		keywords: ['Mờ ảo', 'Bí mật', 'Ẩn dụ', 'Tưởng tượng', 'Vô thức'],
		image: '18 the-moon'
	},
	{
		name: EMAJOR_CARD_NAMES.Sun,
		keywords: ['Chiến thắng', 'Hiện hữu', 'Công nhận', 'Phát triển', 'Giải phóng'],
		image: '19 the-sun'
	},
	{
		name: EMAJOR_CARD_NAMES.Judgement,
		keywords: ['Ghi nhận', 'Thanh thản', 'Quyết định', 'Tái sinh', 'Nghiệp'],
		image: '20 judgement'
	},
	{
		name: EMAJOR_CARD_NAMES.World,
		keywords: ['Hoàn thành', 'Nhịp nhàng', 'Tri kỷ', 'Du hành', 'Thoát tục'],
		image: '21 the-world'
	},
]

export const ALL_CARDS = [...MAJORS]

export enum EMINOR_CARD_NAMES {
	AceOfCups= 'Ace of Cups',
	TwoOfCups= 'Two of Cups',
	ThreeOfCups= 'Three of Cups',
	FourOfCups= 'Four of Cups',
	FiveOfCups= 'Five of Cups',
	SixOfCups= 'Six of Cups',
	SevenOfCups= 'Seven of Cups',
	EightOfCups= 'Eight of Cups',
	NineOfCups= 'Nine of Cups',
	TenOfCups= 'Ten of Cups',
	PageOfCups= 'Page of Cups',
	KnightOfCups= 'Knight of Cups',
	QueenOfCups= 'Queen of Cups',
	KingOfCups= 'King of Cups',
}

export const CUPS = [
	{
		name: EMINOR_CARD_NAMES.AceOfCups,
		keywords: ['Rung động'],
		image: 'ace-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.TwoOfCups,
		keywords: ['Hội ngộ'],
		image: 'two-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.ThreeOfCups,
		keywords: ['Hoà nhập'],
		image: 'three-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.FourOfCups,
		keywords: ['Thoái trào'],
		image: 'four-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.FiveOfCups,
		keywords: ['Tiếc thương'],
		image: 'five-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.SixOfCups,
		keywords: ['Hoài niệm'],
		image: 'six-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.SevenOfCups,
		keywords: ['Đa nhiệm'],
		image: 'seven-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.EightOfCups,
		keywords: ['Buông bỏ'],
		image: 'eight-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.NineOfCups,
		keywords: ['Thoả mãn'],
		image: 'nine-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.TenOfCups,
		keywords: ['Tận hưởng'],
		image: 'ten-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.PageOfCups,
		keywords: ['Thân thiện'],
		image: '4 page-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.KnightOfCups,
		keywords: ['Khai mở'],
		image: '3 knight-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.QueenOfCups,
		keywords: ['Trực giác'],
		image: '2 queen-of-cups'
	},
	{
		name: EMINOR_CARD_NAMES.KingOfCups,
		keywords: ['Điều tiết'],
		image: '1 king of cups'
	}
]