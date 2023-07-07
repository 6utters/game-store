type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
	  }
	: T

type FileEvent = ChangeEvent<HTMLInputElement> & {
	target: EventTarget & { files: FileList }
}
