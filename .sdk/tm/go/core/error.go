package core

type HarryPotterError struct {
	IsHarryPotterError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHarryPotterError(code string, msg string, ctx *Context) *HarryPotterError {
	return &HarryPotterError{
		IsHarryPotterError: true,
		Sdk:              "HarryPotter",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HarryPotterError) Error() string {
	return e.Msg
}
