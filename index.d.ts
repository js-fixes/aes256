class AesCipher {
	/**
	 * A passphrase of any length to used to generate a symmetric session key.
	 * @member key
	 * @readonly
	 */
	readonly key: string;
	/**
	 * Create a symmetric cipher with a given passphrase to then encrypt/decrypt data symmetrically.
	 * @param key A passphrase of any length to used to generate a symmetric session key.
	 * @public
	 * @constructor
	 */
	constructor(key: string);
	/**
	 * Encrypt a clear-text message using AES-256 plus a random Initialization Vector.
	 * @param plaintext The clear-text message to be encrypted.
	 * @returns A custom-encrypted version of the input.
	 * @public
	 * @method
	 */
	public encrypt(plaintext: string): string;
	public encrypt(plaintext: Buffer): Buffer;

	/**
	 * Decrypt an encrypted message back to clear-text using AES-256 plus a random Initialization Vector.
	 * @param encrypted The encrypted message to be decrypted.
	 * @returns The original plain-text message.
	 * @public
	 * @method
	 */
	public decrypt(encrypted: string): string;
	public decrypt(encrypted: Buffer): Buffer;
}

var aes256 = {
	/**
	 * Encrypt a clear-text message using AES-256 plus a random Initialization Vector.
	 * @param key A passphrase of any length to used to generate a symmetric session key.
	 * @param input The clear-text message or buffer to be encrypted.
	 * @returns A custom-encrypted version of the input.
	 * @public
	 * @method
	 */
	encrypt(key: string, input: string): string {},
	encrypt(key: string, input: Buffer): Buffer {},

	/**
	 * Decrypt an encrypted message back to clear-text using AES-256 plus a random Initialization Vector.
	 * @param key A passphrase of any length to used to generate a symmetric session key.
	 * @param encrypted The encrypted message to be decrypted.
	 * @returns The original plain-text message or buffer.
	 * @public
	 * @method
	 */
	decrypt(key: string, encrypted: string): string {},
	decrypt(key: string, encrypted: Buffer): Buffer {},

	/**
	 * Create a symmetric cipher with a given passphrase to then encrypt/decrypt data symmetrically.
	 * @param key  A passphrase of any length to used to generate a symmetric session key.
	 * @returns
	 * @public
	 * @method
	 */
	createCipher(key: string): AesCipher {},
};
export = aes256;
