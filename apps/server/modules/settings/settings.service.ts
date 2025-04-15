import { Ok, Result, err, ok } from 'neverthrow'

import { SettingsModel } from '@/db'
import { Errors } from '@/types/common'
import { SettingsDto } from '@/types/settings'

import { CreateSettingsDto, SettingsError, UpdateSettingsDto } from './settings.types'

export class SettingsService {
  model = SettingsModel

  readAll = async (): Promise<Ok<SettingsDto[], never>> => {
    const settings = await this.model.findAll()

    return ok(settings.map((setting) => setting.asDto()))
  }

  read = async (id: number): Promise<Result<SettingsDto, Errors<typeof SettingsError, 'DoesNotExist'>>> => {
    const settings = await this.model.findByPk(id)

    if (!settings) {
      return err('ERR_SETTINGS_DOES_NOT_EXIST')
    }

    return ok(settings.asDto())
  }

  create = async (
    dto: CreateSettingsDto
  ): Promise<Result<SettingsDto, Errors<typeof SettingsError, 'AlreadyExists'>>> => {
    const [settings, created] = await this.model.findOrCreate({
      where: { userId: dto.userId },
      defaults: dto,
    })

    if (!created) {
      return err('ERR_SETTINGS_ALREADY_EXISTS')
    }

    return ok(settings.asDto())
  }

  update = async (
    id: number,
    dto: UpdateSettingsDto
  ): Promise<Result<SettingsDto, Errors<typeof SettingsError, 'DoesNotExist'>>> => {
    const settings = await this.model.findByPk(id)

    if (!settings) {
      return err('ERR_SETTINGS_DOES_NOT_EXIST')
    }

    await settings.update(dto)

    return ok(settings.asDto())
  }

  delete = async (id: number): Promise<Result<void, Errors<typeof SettingsError, 'DoesNotExist'>>> => {
    const settings = await this.model.findByPk(id)

    if (!settings) {
      return err('ERR_SETTINGS_DOES_NOT_EXIST')
    }

    await settings.destroy()

    return ok()
  }
}

export const settingsService = new SettingsService()
