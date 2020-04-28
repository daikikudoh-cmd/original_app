const ongaq = new Ongaq ({
	api_key: "b2f52d085245478087c08fa83c45f0ee",
	volume: 80,
	bpm: 120,
	onReady: () => {

		const button = document.getElementById("button")
		button.className = "button start"

		button.onclick = () => {
			if (ongaq.params.isPlaying) {
				ongaq.pause()
				button.className = "button start"
			} else {
				ongaq.start()
				button.className = "button pause"
			}
		}

	}
})

// const metronome = new Part ({
// 	sound: "small_cube_drums",
// 	measure: 4,
// 	mute: false,
// 	maxLap: 0,
// 	repeat: false,
// 	beatsInMeasure: 16
// })

// metronome.add(new Filter ({
// 	key: "hihat",
// 	active: beat => beat %8===0
// }))

// ongaq.add(metronome)





const my_drums = new Part ({
	sound: "my_band_drums",
	measure: 8,
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16
})

my_drums.add(new Filter ({
	key: "hihat",
	active: beat => beat % 4===0
}))

my_drums.add(new Filter ({
	key: "kick",
	active: beat => beat % 16===0
}))

my_drums.add(new Filter ({
	key: "snare",
	active: beat => beat ===8
}))


ongaq.add(my_drums)














const chord_c1 = ["C1","E1","G1"]
const chord_d1 = ["D1","F1#","A1"]
const chord_e1 = ["E1","G1#","B1"]
const chord_f1 = ["F1","A2","C2"]
const chord_g1 = ["G1","B2","D2"]
const chord_a1 = ["A2","C2#","E2"]
const chord_b1 = ["B2","D2#","F2#"]
const chord_c2 = ["C3","E2","G2"]


const my_guitar = new Part ({
	sound: "jazz_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

my_guitar.add( new Filter ({
	key:  chord_c1,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat%4===0 && measure === 0
}) )

my_guitar.add( new Filter ({
	key:  chord_d1,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

my_guitar.add( new Filter ({
	key:  chord_e1,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

my_guitar.add( new Filter ({
	key:  chord_f1,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 3
}) )
my_guitar.add( new Filter ({
	key:  chord_g1,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )
my_guitar.add( new Filter ({
	key:  chord_a1,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )
my_guitar.add( new Filter ({
	key:  chord_b1,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )
my_guitar.add( new Filter ({
	key:  chord_c2,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )


ongaq.add( my_guitar )





// const my_bass = new Part ({
// 	sound: "mono_bass",
// 	measure: 4
// })

// my_bass.add(new Filter ({
// 	key: (beat, measure) => {
// 		return measure !== 3 ? ["C2"] : ["C2#"]
// 	},
// 	length: 4,
// 	active: (beat, measure) => {
// 		return (beat === 12 && measure % 2 === 0) || (beat === 8 && measure % 2 === 1)
// 	}
// }))
// // my_bass.add(new Filter ({
// // 	type: "pan",
// // 	x: (beat, measure) =>measure % 2 === 0 ? -45 : 45
// // }))

// ongaq.add(my_bass)
