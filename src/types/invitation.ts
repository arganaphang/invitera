type CoupleType = {
  name: string
  detail: string
  link: string // url validation
  mother: string
  father: string
}

type Address = {
  point: string
  detail: string
}

export type Invitation = {
  when: Date
  groom: CoupleType
  bride: CoupleType
  address: Address
  galleries: string[] // can be optional
  notes: string // markdown based
}
