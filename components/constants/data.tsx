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

export enum EPossibility {
	YES, NO, POSSIBLY
}

export const MAJORS = [
	{
		name: EMAJOR_CARD_NAMES.Fool,
		keywords: ['Khởi đầu', 'Tự do', 'Tinh khiết', 'Tính không', 'Vô thức'],
		image: '0 the-fool',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Magician, keywords: ['Kiến tạo', 'Tác lực', 'Định hướng', 'Nguyên nhân', 'Ý thức'],
		image: '1 the-magician',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.HighPriestess,
		keywords: ['Quan sát', 'Chậm rãi', 'Yên tĩnh', 'Khoảng cách', 'Trực giác'],
		image: '2 the-high-priestess',
		possibility: EPossibility.POSSIBLY
	},
	{
		name: EMAJOR_CARD_NAMES.Empress, keywords: ['Dưỡng sinh', 'Thai nghén', 'Làm giàu', 'Từ bi', 'Đất mẹ'],
		image: '3 the-empress',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Emperor, keywords: ['Dục dưỡng', 'Cải tạo', 'Kỷ luật', 'Quyền lực', 'Công án'],
		image: '4 the-emperor',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Hierophant, keywords: ['Niềm tin', 'Giáo dục', 'Truyền thống', 'Số đông', 'Đạo'],
		image: '5 the-hierophant',
		possibility: EPossibility.POSSIBLY
	},
	{
		name: EMAJOR_CARD_NAMES.Lover, keywords: ['Đồng điệu', 'Rung động', 'Lựa chọn', 'Phước lành', ' Duyên'],
		image: '6 the-lovers',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Chariot, keywords: ['Nổi bật', 'Rẽ ngang', 'Tách mình', 'Cuộc chiến', ' Biểu hiện'],
		image: '7 the-chariot',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Strength, keywords: ['Nhẫn nại', 'Thấu hiểu', 'Chấp nhận', 'Bình thản', 'Tỉnh thức'],
		image: '8 strength',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Hermit, keywords: ['Thu mình', 'Chiêm nghiệm', 'Nhận thức', 'Phòng thủ', 'Bám chấp'],
		image: '9 the-hermit',
		possibility: EPossibility.NO
	},
	{
		name: EMAJOR_CARD_NAMES.WheelFortune, keywords: ['Chu kỳ', 'Thiên mệnh', 'Ngẫu nhiên', 'Thả lỏng', 'Tận hưởng'],
		image: '10 wheel-of-fortune',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Justice, keywords: ['Pháp luật', 'Tuân thủ', 'Tuyên án', 'Phân minh', 'Nhân quả'],
		image: '11 justice',
		possibility: EPossibility.POSSIBLY
	},
	{
		name: EMAJOR_CARD_NAMES.HangedMan, keywords: ['Tự soi', 'Vỡ lòng', 'Chứng thực', 'Buông xuôi', 'Tịnh tâm'],
		image: '12 the-hanged-man',
		possibility: EPossibility.POSSIBLY
	},
	{
		name: EMAJOR_CARD_NAMES.Death, keywords: ['Thay đổi', 'Hạn mức', 'Tái sinh', 'Biến chuyển', 'Đương nhiên'],
		image: '13 death',
		possibility: EPossibility.NO
	},
	{
		name: EMAJOR_CARD_NAMES.Temperance, keywords: ['Trao đổi', 'Bí thuật', 'Giải pháp', 'Uyển chuyển', 'Từ Bi'],
		image: '14 temperance',
		possibility: EPossibility.YES
	},
	{
		name: EMAJOR_CARD_NAMES.Devil,
		keywords: ['Trần trụi', 'Ràng buộc', 'Khao khát', 'Đổi chác', 'Nợ'],
		image: '15 the-devil',
		possibility: EPossibility.NO
	},
	{
		name: EMAJOR_CARD_NAMES.Tower,
		keywords: ['Đổ vỡ', 'Biến cố', 'Đảo chiều', 'Trả giá', 'Chấp niệm'],
		image: '16 the-tower',
		possibility: EPossibility.NO
	},
	{
		name: EMAJOR_CARD_NAMES.Star,
		keywords: ['Hi vọng', 'Phục hồi', 'Định vị', 'Âm thầm', 'Giải thoát'],
		image: '17 the-star',
		possibility: EPossibility.POSSIBLY
	},
	{
		name: EMAJOR_CARD_NAMES.Moon,
		keywords: ['Mờ ảo', 'Bí mật', 'Ẩn dụ', 'Tưởng tượng', 'Vô thức'],
		image: '18 the-moon',
		possibility: EPossibility.NO
	},
	{
		name: EMAJOR_CARD_NAMES.Sun,
		keywords: ['Chiến thắng', 'Hiện hữu', 'Công nhận', 'Phát triển', 'Giải phóng'],
		image: '19 the-sun'
	},
	{
		name: EMAJOR_CARD_NAMES.Judgement,
		keywords: ['Ghi nhận', 'Thanh thản', 'Quyết định', 'Tái sinh', 'Nghiệp'],
		image: '20 judgement',
		possibility: EPossibility.POSSIBLY
	},
	{
		name: EMAJOR_CARD_NAMES.World,
		keywords: ['Hoàn thành', 'Nhịp nhàng', 'Tri kỷ', 'Du hành', 'Thoát tục'],
		image: '21 the-world',
		possibility: EPossibility.YES
	},
]

export enum EMINOR_CUP_CARD_NAMES {
	AceOfCups = 'Ace of Cups',
	TwoOfCups = 'Two of Cups',
	ThreeOfCups = 'Three of Cups',
	FourOfCups = 'Four of Cups',
	FiveOfCups = 'Five of Cups',
	SixOfCups = 'Six of Cups',
	SevenOfCups = 'Seven of Cups',
	EightOfCups = 'Eight of Cups',
	NineOfCups = 'Nine of Cups',
	TenOfCups = 'Ten of Cups',
	PageOfCups = 'Page of Cups',
	KnightOfCups = 'Knight of Cups',
	QueenOfCups = 'Queen of Cups',
	KingOfCups = 'King of Cups',
}

export const CUPS = [
	{
		name: EMINOR_CUP_CARD_NAMES.AceOfCups,
		keywords: ['Rung động'],
		image: 'ace-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.TwoOfCups,
		keywords: ['Hội ngộ'],
		image: 'two-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.ThreeOfCups,
		keywords: ['Hoà nhập'],
		image: 'three-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.FourOfCups,
		keywords: ['Thoái trào'],
		image: 'four-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.FiveOfCups,
		keywords: ['Tiếc thương'],
		image: 'five-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.SixOfCups,
		keywords: ['Hoài niệm'],
		image: 'six-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.SevenOfCups,
		keywords: ['Đa nhiệm'],
		image: 'seven-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.EightOfCups,
		keywords: ['Buông bỏ'],
		image: 'eight-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.NineOfCups,
		keywords: ['Thoả mãn'],
		image: 'nine-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.TenOfCups,
		keywords: ['Tận hưởng'],
		image: 'ten-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.PageOfCups,
		keywords: ['Thân thiện'],
		image: '4 page-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.KnightOfCups,
		keywords: ['Khai mở'],
		image: '3 knight-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.QueenOfCups,
		keywords: ['Trực giác'],
		image: '2 queen-of-cups', possibility: EPossibility.YES
	},
	{
		name: EMINOR_CUP_CARD_NAMES.KingOfCups,
		keywords: ['Điều tiết'],
		image: '1 king of cups', possibility: EPossibility.YES
	}
]

export enum EMINOR_SWORDS_CARD_NAMES {
	AceOfSwords = 'Ace of Swords',
	TwoOfSwords = 'Two of Swords',
	ThreeOfSwords = 'Three of Swords',
	FourOfSwords = 'Four of Swords',
	FiveOfSwords = 'Five of Swords',
	SixOfSwords = 'Six of Swords',
	SevenOfSwords = 'Seven of Swords',
	EightOfSwords = 'Eight of Swords',
	NineOfSwords = 'Nine of Swords',
	TenOfSwords = 'Ten of Swords',
	PageOfSwords = 'Page of Swords',
	KnightOfSwords = 'Knight of Swords',
	QueenOfSwords = 'Queen of Swords',
	KingOfSwords = 'King of Swords',
}

export const SWORDS = [
	{
		name: EMINOR_SWORDS_CARD_NAMES.AceOfSwords,
		keywords: ['Đột phá'],
		image: 'ace-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.TwoOfSwords,
		keywords: ['Cân nhắc'],
		image: 'two-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.ThreeOfSwords,
		keywords: ['Dứt khoát'],
		image: 'three-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.FourOfSwords,
		keywords: ['Nghỉ ngơi'],
		image: 'four-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.FiveOfSwords,
		keywords: ['Vị kỷ'],
		image: 'five-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.SixOfSwords,
		keywords: ['Tiễn đưa'],
		image: 'six-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.SevenOfSwords,
		keywords: ['Linh hoạt'],
		image: 'seven-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.EightOfSwords,
		keywords: ['Giới hạn'],
		image: 'eight-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.NineOfSwords,
		keywords: ['Trăn trở'],
		image: 'nine-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.TenOfSwords,
		keywords: ['Quên mình'],
		image: 'ten-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.PageOfSwords,
		keywords: ['Lý trí'],
		image: 'page-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.KnightOfSwords,
		keywords: ['Sắc sảo'],
		image: '3 knight-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.QueenOfSwords,
		keywords: ['Tầm nhìn'],
		image: '2 queen-of-swords', possibility: EPossibility.YES
	},
	{
		name: EMINOR_SWORDS_CARD_NAMES.KingOfSwords,
		keywords: ['Quy chuẩn'],
		image: '1 king of swords', possibility: EPossibility.YES
	}
]

export const MINORS = [...CUPS, ...SWORDS]
export const ALL_CARDS = [...MAJORS, ...MINORS]
export const NUMBER_OF_ALL_CARDS = ALL_CARDS.length
